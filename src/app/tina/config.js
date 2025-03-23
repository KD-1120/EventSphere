import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.NEXT_PUBLIC_TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "template",
        label: "Templates",
        path: "content/templates",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description1",
            label: "Description 1",
          },
          {
            type: "string",
            name: "description2",
            label: "Description 2",
          },
          {
            type: "image",
            name: "imageUrl",
            label: "Template Image",
          },
          {
            type: "string",
            name: "icon",
            label: "Icon",
            options: [
              { label: "Heart", value: "Heart" },
              { label: "Briefcase", value: "Briefcase" },
              { label: "ShoppingBag", value: "ShoppingBag" },
              { label: "PenTool", value: "PenTool" },
              { label: "Music", value: "Music" },
              { label: "Image", value: "Image" },
              { label: "BookOpen", value: "BookOpen" },
              { label: "Award", value: "Award" },
              { label: "Calendar", value: "Calendar" },
            ],
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "object",
            name: "sections",
            label: "Sections",
            list: true,
            templates: [
              {
                name: "hero",
                label: "Hero Section",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "string",
                    name: "subheading",
                    label: "Subheading",
                  },
                  {
                    type: "image",
                    name: "backgroundImage",
                    label: "Background Image",
                  },
                ],
              },
              {
                name: "events",
                label: "Events Section",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "object",
                    name: "eventItems",
                    label: "Event Items",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "location",
                        label: "Location",
                      },
                      {
                        type: "string",
                        name: "date",
                        label: "Date",
                      },
                      {
                        type: "string",
                        name: "price",
                        label: "Price",
                      },
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                    ],
                  },
                ],
              },
              {
                name: "locations",
                label: "Locations Section",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "object",
                    name: "locationItems",
                    label: "Location Items",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "name",
                        label: "Name",
                      },
                      {
                        type: "string",
                        name: "detail",
                        label: "Detail",
                      },
                      {
                        type: "string",
                        name: "bgColor",
                        label: "Background Color",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});