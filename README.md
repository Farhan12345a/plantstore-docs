# Fern Work Sample Demo

You'll be modifying the contents of this repository to create a demo Fern website for a mock Plant Store company. In this scenario, we will be showing the Plant Store company this website, along with the repository used to generate the website, so be sure to keep the repository clean and ready to show a potential client. Prospective customers evaluate docs on ease of use, styling and custom features (more on this later).

Follow the steps in this `README.md` to get started.

## 1. Installation

To start, install the Fern CLI: 

```
npm install -g fern-api
```

This will allow you to use Fern in the terminal to check and publish your demo site. 

## 2. Project Naming

Fern requires you to specify a unique organization name and website domain to generate a project. 

First, update the organization name defined in the [`fern.config.json`](/fern/fern.config.json) file to something other than `sample-demo-site`. As an example, you could use `firstName-lastName-demo`

Next, update _only the first subdomain_ of the `url` field defined in the [`docs.yml`](/fern/docs.yml) file to something other than `sample-demo-site`. The resulting URL should look something like `firstName-lastName-demo.docs.buildwithfern.com` and publish the docs site.

## 3. Complete the Work Sample

Complete the steps outlined in the [Overview page](/fern/pages/overview.mdx).

## 4. Push to a GitHub Repository

Publish the contents of this folder to a GitHub repository. Be sure to remove any unnecessary files. 

## 5. Replace this README.md

Finally, since we'll be showing the fake Plant Store company this repository during the demo, replace the contents of this `README.md` with some helpful instructions for getting started and using the project. 
