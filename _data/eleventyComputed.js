module.exports = {
  serverlessColor: function(data) {
    return this.tinycolor(data.eleventy.serverless?.path?.color);
  },
  backgroundColor: function(data) {
    if(data.serverlessColor) {
      return data.serverlessColor.toHexString();
    }
    return "#fff";
  },
  background: function(data) {
    if(data.serverlessColor) {
      let gradient = `linear-gradient(${data.serverlessColor}, ${data.serverlessColor}, ${data.serverlessColor.clone().darken(30)})`;
      return `${gradient} ${data.backgroundColor}`;
    }
    return data.backgroundColor;
  },
  color: function(data) {
    if(data.serverlessColor) {
      let readabilityWhite = this.contrast(data.serverlessColor, "#fff");
      let readabilityBlack = this.contrast(data.serverlessColor, "#000");
      if(readabilityWhite > readabilityBlack) {
        return "white";
      }
      return "black";
    }
  }
};
