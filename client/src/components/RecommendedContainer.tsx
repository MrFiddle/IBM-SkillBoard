import RecommendedGrid from "./RecommendedGrid/RecommendedGrid";

const RecommendedContainer = () => {
  const data = [
    {
      certificate: {
        id: "certificate1",
        name: "React",
        type: "Course",
        expiration_date: "2025-12-31",
      },
      categories: [
        {
          id: "category1",
          name: "Frontend",
        },
      ],
    },
    {
      certificate: {
        id: "certificate2",
        name: "Scrum Master",
        type: "Course",
        expiration_date: "2030-12-31",
      },
      categories: [
        {
          id: "category2",
          name: "Agile",
        },
      ],
    },
    {
      certificate: {
        id: "certificate3",
        name: "Python",
        type: "Course",
        expiration_date: "2021-12-31",
      },
      categories: [
        {
          id: "category3",
          name: "Backend",
        },
      ],
    },
    {
      certificate: {
        id: "certificate4",
        name: "AWS Cloud Practitioner",
        type: "Course",
        expiration_date: "2021-12-31",
      },
      categories: [
        {
          id: "category1",
          name: "DevOps",
        },
      ],
    },
    {
      certificate: {
        id: "certificate5",
        name: "Prompt Engineering",
        type: "Course",
        expiration_date: "2024-12-31",
      },
      categories: [
        {
          id: "category2",
          name: "AI & Data Science",
        },
      ],
    },
    {
      certificate: {
        id: "certificate6",
        name: "React Native",
        type: "Course",
        expiration_date: "2025-12-31",
      },
      categories: [
        {
          id: "category1",
          name: "Frontend",
        },
      ],
    },
  ];

  if (data) {
    return <RecommendedGrid certificates={data} />;
  }
};

export default RecommendedContainer;
