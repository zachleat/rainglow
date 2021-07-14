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
    return `${data.backgroundColor}`;
  },
  color: function(data) {
    if(data.serverlessColor) {
      let readability = this.textReadability(data.serverlessColor);
      if(readability.white > readability.black) {
        return "white";
      }
      return "black";
    }
  },
  readabilityScore: function(data) {
    if(data.serverlessColor) {
      return this.textReadability(data.serverlessColor);
    }
  }
};
