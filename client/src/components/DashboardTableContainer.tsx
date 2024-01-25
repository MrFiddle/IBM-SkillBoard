import DashboardTable from "./DashboardTable/DashboardTable";

const DashboardTableContainer = () => {
  const data = [
    {
      certificate: {
        id: "certificate1",
        name: "React",
        type: "IBM",
        expiration_date: "2024-10-10",
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
        name: "Node.js",
        type: "IBM",
        expiration_date: "2024-11-15",
      },
      categories: [
        {
          id: "category2",
          name: "Backend",
        },
      ],
    },
    {
      certificate: {
        id: "certificate3",
        name: "Python",
        type: "IBM",
        expiration_date: "2024-01-20",
      },
      categories: [
        {
          id: "category3",
          name: "Data Science",
        },
      ],
    },
    {
      certificate: {
        id: "certificate4",
        name: "AWS Cloud Practitioner",
        type: "Industry",
        expiration_date: "2024-12-31",
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
        type: "Industry",
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
        name: "Angular",
        type: "Microsoft",
        expiration_date: "2024-09-25",
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
        id: "certificate7",
        name: "Java",
        type: "Oracle",
        expiration_date: "2024-08-15",
      },
      categories: [
        {
          id: "category2",
          name: "Backend",
        },
      ],
    },
    // 10 more additional items
    {
      certificate: {
        id: "certificate8",
        name: "Vue.js",
        type: "Google",
        expiration_date: "2024-07-05",
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
        id: "certificate9",
        name: "C#",
        type: "Microsoft",
        expiration_date: "2024-06-12",
      },
      categories: [
        {
          id: "category2",
          name: "Backend",
        },
      ],
    },
    {
      certificate: {
        id: "certificate10",
        name: "Machine Learning",
        type: "Google",
        expiration_date: "2024-11-30",
      },
      categories: [
        {
          id: "category3",
          name: "Data Science",
        },
      ],
    },
  ];

  const changeType = (type: string) => {
    console.log(type);
  };

  return (
    <DashboardTable
      data={data}
      changeType={changeType}
      isLoading={false}
      error={"error"}
    />
  );
};

export default DashboardTableContainer;
