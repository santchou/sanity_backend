export default {
  name: "abouts",
  title: "Abouts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Decription",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hopspot: true,
      },
    },
  ],
};
