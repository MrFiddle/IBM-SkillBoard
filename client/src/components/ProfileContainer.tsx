import Profile from "./Profile/Profile";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const ProfileContainer = () => {
  // export interface Team {
  //   id: string;
  //   name: string;
  // }

  // export interface TeamWithManager {
  //   team: Team;
  //   manager: User;
  // }

  // export interface Certificate {
  //   id: string;
  //   name: string;
  //   type: string;
  //   expiration_date: string;
  // }

  // export interface CertificateResponse {
  //   certificate: Certificate;
  //   categories: Category[];
  // }

  const data = {
    employee: {
      id: "ninazaragoza",
      name: "Nina Simone",
      last_name: "Zaragoza Caballero",
      email: "ninazaragoza@ibm.com",
      role: "Administradora General",
    },
    teams: [
      {
        team: {
          id: "team1",
          name: "Frontend Team",
        },
        manager: {
          id: "jppd",
          name: "Juan Pablo",
          last_name: "Perez Duran",
          email: "jppd0657@ibm.com",
          role: "Manager",
        },
      },
      {
        team: {
          id: "team2",
          name: "Backend Team",
        },
        manager: {
          id: "manole",
          name: "Manola",
          last_name: "Zaragoza",
          email: "manolazaragoza@ibm.com",
          role: "Manager",
        },
      },
    ],
    certificates: [
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
    ],
  };

  if (data) {
    return (
      <div>
        <Profile
          user={data.employee}
          teamWithManager={data.teams}
          certificates={data.certificates}
        />
      </div>
    );
  }

  return <Loading type={true} mainColor={false} />;
};

export default ProfileContainer;
