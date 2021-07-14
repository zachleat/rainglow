---
layout: "layout.njk"
permalink:
  serverless: "/:color/"
eleventyComputed:
  readabilityScore: "{{ serverlessColor | textReadability }}"
---
# rainglow `{{ serverlessColor }}`


`{{ serverlessColor.toHslString() }}`<br>
`{{ serverlessColor.toRgbString() }}`

{% if serverlessColor.toName() %}
{{ serverlessColor.toName() }}
{% endif %}

* Contrast {{ color }} on {{ backgroundColor }}: {% if readabilityScore > 4 %}✅{% else %}🚫{% endif %} {{ readabilityScore }}
* Go to [random color](/{% randomColor %}/)
* Built with Eleventy Serverless:
  * `page.date`: {{ page.date }}
  * `new Date()`: {{ now }}


```
{{ eleventy.serverless | dump(2) | safe }}
```