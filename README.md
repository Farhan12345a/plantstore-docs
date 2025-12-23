# Prince Plants API Documentation

This repository contains a demo API documentation website for **Prince Plants**, a fictional plant store company.  
The site is built using **Fern** and demonstrates how a production-ready API landing page and reference documentation could be structured for a real customer.

This project is intended to showcase:
- A polished API landing page
- Clear developer onboarding and examples
- A clean, client-ready repository structure

---

## What’s included

- A custom API landing page written in MDX using Fern components
- Auto-generated API reference documentation from an OpenAPI (Swagger) spec
- Custom branding and styling for the Prince Plants product
- Global custom JavaScript (floating action button)
- Example API requests in JavaScript and Python

---

## Prerequisites

- Node.js (v18 or newer recommended)
- npm
- Fern CLI

Install the Fern CLI globally using 'npm install -g fern-api'


## Running the documentation locally

From the fern/ directory, start the development server :

fern docs dev

This will launch a local documentation site in your browser.
Changes to MDX files, styles, or configuration will automatically reload.

The main landing page is written in MDX and located in 'fern/pages/'

The landing page uses Fern components such as:
- Cards and CardGroups
- Steps
- Tabs
- Accordions
- Callouts (Note, Warning, Info)
You can edit content, reorder sections, or add new components directly in the MDX file.

## API Reference

The API reference is generated automatically from the OpenAPI specification located at ['api.yml'](/fern/openapi/api.yml)

To update the API documentation:
1. Modify the OpenAPI YAML file
2. Save the changes
3. Reload the docs site
Fern will regenerate the API reference automatically.

## Publishing the documentation:
When ready, the documentation can be published with:
fern docs publish

This deploys the site to the configured Fern domain.

Next, update _only the first subdomain_ of the `url` field defined in the [`docs.yml`](/fern/docs.yml) file to something other than `sample-demo-site`. The resulting URL should look something like `firstName-lastName-demo.docs.buildwithfern.com` and publish the docs site.
