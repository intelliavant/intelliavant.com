---
title: "Markdown Converter"
date: 2021-01-29T01:57:15-05:00
type: product
header_image: /images/product/markdown-converter/intro-image.png
description: Markdown Converter is a simple Google Docs add-on. It converts the Markdown syntax in selected content into Google Docs styles.
---

Markdown Converter is a simple Google Docs add-on. It converts the Markdown syntax in selected content into Google Docs styles.

## Usage

Once installed, Markdown Converter creates a menu item at **Add-ons > Markdown Converter**.

Select **Add-ons > Markdown Converter > Start** to start the add-on sidebar. You will see there is only one "**Convert**" button in the sidebar.

Select any text that contains markdown syntax, then click the **Convert** button. Your selected text will be parsed and markdown syntax will be converted to native Google Docs styles.

> To ensure performance, don't select large amount of text. Ideally selected text should be no more than one page.

If you are not happy with the conversion, you can always use `Ctrl-Z` (on Windows) or `Command-Z` (on MacOS) to undo the conversion.

The following markdown syntax is supported:

Markdown syntax | Converted styles
----------------|--------------------
 `**bold**`     | **bold**
 `*italic*` | *italic*
{{<rawhtml>}}<code>`code style`</code>{{</rawhtml>}} | `code style`
{{<rawhtml>}}<code>```<br>code block line 1<br>code block line 2<br>```<br></code>{{</rawhtml>}} | {{<rawhtml>}}<pre style="border: 1px solid #888; padding: 2px 4px; background: #f0f0f0">code block line 1<br>code block line 2</pre>{{</rawhtml>}}

The following syntax is not and will not be supported since Google Docs has native support:

- Ordered list
- Unordered list

## Privacy policy

This add-on does not collect nor share any information about the user or the document. During the conversion, the document content is accessed, but no content will be stored.

The following scopes are required in this add-on:

https://www.googleapis.com/auth/documents - View and manage your Google Docs documents. This is used to access the paragraphs in the document and convert them.


## Terms of Service

The use of the Markdown Converter add-on (Add-on) is conditioned to the acceptance and compliance to these Terms of Service (Terms). By installing and using the Add-on you (User) agree to be bound to these Terms.

**Disclaimer**

The Add-on is provided 'as is' and the its developer (Developer)  makes no promise and is not obligated to add features, fix bugs or unintended behavior, adapt functionalities, or keep current functionalities.

**Limitations**

The Developer can not be held liable for any issues, damages or corruption to the user's document or any consequences of those problems. The Developer is not responsible if the User uses the Add-on it to infringe laws, rules, intellectual properties, etc. The User is the solely responsible for their creations and files even if the Add-on was used at some point.

**Software changes and discontinuation**

The functionality of the Add-on can change without notice.

The Developer can cease support and development of the Add-on at any time without previous notice.

The User can stop using the Add-on at any time by simply uninstalling it.

**Terms of Service changes**

These Terms can be revised at any time without previous notice. If the User continues to use the Add-on they agree to be bound to the current version of the Terms.