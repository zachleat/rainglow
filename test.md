---
layout: "layout.njk"
permalink:
  serverless: "/:color/"
---
# rainglow `{{ serverlessColor }}`

`{{ serverlessColor.toHslString() }}`<br>
`{{ serverlessColor.toRgbString() }}`

{% if serverlessColor.toName() %}
{{ serverlessColor.toName() }}
{% endif %}

* Contrast with white: {{ readabilityScore.white | round(3) }}
  * {% if readabilityScore.white > 4.5 %}✅{% else %}🚫{% endif %} WCAG 2.0 AA
  * {% if readabilityScore.white > 7 %}✅{% else %}🚫{% endif %} WCAG 2.0 AAA
* Contrast with black: {{ readabilityScore.black | round(3) }}
  * {% if readabilityScore.black > 4.5 %}✅{% else %}🚫{% endif %} WCAG 2.0 AA
  * {% if readabilityScore.black > 7 %}✅{% else %}🚫{% endif %} WCAG 2.0 AAA
* Go to [random color](/{% randomColor %}/)
{# * Built with Eleventy Serverless:
  * `page.date`: {{ page.date }}
  * `new Date()`: {{ now }} #}


```
{{ eleventy.serverless | dump(2) | safe }}
```