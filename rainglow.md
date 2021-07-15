---
layout: "layout.njk"
permalink:
  serverless: "/:color/"
comparisonColors:
  - "#fff"
  - "#000"
---
# rainglow `{{ serverlessColor }}`

`{{ serverlessColor.toHslString() }}`<br>
`{{ serverlessColor.toRgbString() }}`

{% if serverlessColor.toName() %}
{{ serverlessColor.toName() }}
{% endif %}

{%- for comparison in comparisonColors %}
{%- set ratio = serverlessColor | contrast(comparison) %}
* <span style="color: {{ comparison }}">Contrast with {{ comparison }}: {{ ratio | round(3) }}</span>
  * {% if ratio > 4.5 %}✅{% else %}🚫{% endif %} WCAG 2.0 AA
  * {% if ratio > 7 %}✅{% else %}🚫{% endif %} WCAG 2.0 AAA
{%- endfor %}
* Go to [random color](/{% randomColor %}/)
{# * Built with Eleventy Serverless:
  * `page.date`: {{ page.date }}
  * `new Date()`: {{ now }} #}


```
{{ eleventy.serverless | dump(2) | safe }}
```

Built with [Eleventy Serverless](https://www.11ty.dev/docs/plugins/serverless/). [Source code available on GitHub.](https://github.com/zachleat/rainglow)