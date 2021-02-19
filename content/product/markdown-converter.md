---
title: "Markdown Converter"
date: 2021-01-29T01:57:15-05:00
type: product
header_image: /images/product/markdown-converter/intro-image.png
description: Markdown Converter is a simple Google Docs add-on. It converts Markdown syntax in selected content into Google Docs styles.
---

Markdown Converter is a simple Google Docs add-on. It does only one thing: converting Markdown syntax in selected content to Google Docs styles.

![Markdown Converter](https://lh3.googleusercontent.com/3cyaAOuprFGNdFG-Bnb654JrM3NP79vKNUlZh5uR-4IlO2Av31UKehqesuq1oSHBb9E)

## Background

The reason why Markdown Converter was created is that Google Docs does not support Markdown-style formats that allows quickly typing source codes. For example, to enter `variableName`, you need to first enter "varibleName", then select the text with your mouse, and choose a monospace font from the font menu. This has to be done repeatly especially when writing technical documents.

Due to technical limitations, it is not possible to convert Markdown syntax when typing. So Markdown Converter has to choose a less convenient way, to convert selected text. Although not ideal, it still provides a lot of convenience than the native styling tools.

## Usage

Once installed, Markdown Converter creates a menu item at **Add-ons > Markdown Converter**.

Select **Add-ons > Markdown Converter > Start** to start the add-on sidebar. You will see there is only one "**Convert**" button in the sidebar.

Select any text that contains markdown syntax, then click the **Convert** button. Your selected text will be parsed and markdown syntax will be converted to native Google Docs styles.

> To ensure performance, don't select large amount of text. Ideally selected text should be no more than one page.

If you are not happy with the conversion, you can always use `Ctrl-Z` (on Windows) or `Command-Z` (on MacOS) to undo the conversion.

{{<youtube 2giUqEuZlEo>}}

## Supported Markdown Syntax

The following markdown syntax is supported:

Markdown syntax | Converted style
----------------|--------------------
 `**bold**`     | **bold**
 `*italic*` | *italic*
{{<rawhtml>}}<code>`code style`</code>{{</rawhtml>}} | `code style`
{{<rawhtml>}}<code>```<br>code block line 1<br>code block line 2<br>```<br></code>{{</rawhtml>}} | {{<rawhtml>}}<pre style="border: 1px solid #888; padding: 2px 4px; background: #f0f0f0">code block line 1<br>code block line 2</pre>{{</rawhtml>}}

The following syntax is not and will not be supported since Google Docs has native support:

- Ordered list
- Unordered list



## Privacy Policy

Last updated: Feb 12th, 2011

Intelliavant Technologies, Ltd ("us", "we", or "our") is the creator of Markdown Converter ("the app", or "it"), a Google Docs add-on.
This page informs you of our policies regarding the collection, use, and disclosure of Personal Data we receive from users of the app.

We use your personal data only for providing the features of the app. By using the app, you agree to the collection and use of information in accordance with this policy.


**Current Document Content**

The app accesses the document content where the app is running to provide the service.
The document content will be accessed, converted, and written back the current document.
We do not store your document content anywhere, nor we share your document content in any way.

**Google Docs UI**

The app needs to access your Google Docs UI to create a sidebar for hosting the UI of this app. It will not change any part of the Google Docs UI other than the sidebar.


**Google OAuth Scopes**

The following scopes are required to use this app:

- `https://www.googleapis.com/auth/documents.currentonly` - View and manage documents that this app has been installed on. This is used to access the document content for conversion.
- `https://www.googleapis.com/auth/script.container.ui` - Create the add-on sidebar which contains the **Convert** button to trigger the conversion.

**Changes To This Privacy Policy**

This Privacy Policy is effective as of (add date) and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.

We reserve the right to update or change our Privacy Policy at any time without previous notice and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.


## Terms of Service

The use of the Markdown Converter ("the app"), developed by Intelliavant Technologies, Ltd. ("us", "we", or "our") is conditioned to the acceptance and compliance to these Terms of Service (Terms). By installing and using the app, you ("the user") agree to be bound to these Terms.

**Disclaimer**

The app is provided 'as is' and we makes no promise and is not obligated to add features, fix bugs or unintended behavior, adapt functionalities, or keep current functionalities.

**Limitations**

We cannot be held liable for any issues, damages or corruption to the user's document or any consequences of those problems.
We are not responsible if the user uses the app it to infringe laws, rules, intellectual properties, etc. The User is the solely responsible for their creations and files even if the Add-on was used at some point.

**Software changes and discontinuation**

The functionality of the Add-on can change without notice.

The Developer can cease support and development of the Add-on at any time without previous notice.

The User can stop using the Add-on at any time by simply uninstalling it.

**Terms of Service changes**

These Terms can be revised at any time without previous notice. If the User continues to use the Add-on they agree to be bound to the current version of the Terms.

## Support

Please [submit a ticket](https://github.com/intelliavant/gas-markdown-converter/issues) in the GitHub repository of this project.

**NOTE**: We are not responsible for any damages or corruptions to your document. If you get incorrect result from this add-on, please **Undo** the conversion by pressing `Ctrl-Z` (on Windows) or `Cmd-Z` (on macOS) **immediately** before you close the browser tab, to avoid any data loss.
