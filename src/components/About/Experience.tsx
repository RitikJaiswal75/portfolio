function Experience() {
  return (
    <div className="text-white sm:p-2 font-medium flex-col gap-4 sm:text-xl">
      <h1 className="text-2xl font-bold text-center">Experience</h1>
      <span className="underline text-[#c79c18] font-bold">Moody's: </span>
      Software Engineer
      <br />
      <p className="text-sm text-[#c79c18]"> Nov-2024 - Present</p>
      <ul className="list-disc px-2 ml-2">
        <li>
          Implement Workflow builder to streamline the process of running
          template.
        </li>
        <li>Work on multiple products both in vue and react.</li>
        <li>Implement pricing formula ui changes.</li>
        <li>Part of insurance business unit.</li>
      </ul>
      <br />
      <span className="underline text-[#c79c18] font-bold">
        JioCinema | Viacom18:
      </span>{" "}
      Frontend Engineer
      <br />
      <p className="text-sm text-[#c79c18]"> Nov-2023 - Oct-2024</p>
      <ul className="list-disc px-2 ml-2">
        <li>
          Implemented a multi-profile feature, resulting in 135k+ user profiles.
        </li>
        <li>
          Integrated API retry mechanisms, enhanced user tracking, and reduced
          5xx errors.
        </li>
        <li>
          Built cross-platform services and internal tools, including JWT
          decoding and crash analytics.
        </li>
        <li>
          Authored developer onboarding documentation to streamline processes.
        </li>
      </ul>
      <br />
      <span className="underline text-[#c79c18] font-bold">
        Tata Consultancy Services (TCS)
      </span>{" "}
      SOC Analyst
      <br />
      <p className="text-sm text-[#c79c18]"> Aug-2022 - Oct-2023</p>
      <ul className="list-disc px-2 ml-2">
        <li>
          Monitored and analyzed over 900 security incidents, providing insights
          for cybersecurity strategies.
        </li>
        <li>
          Conducted threat analysis and created reports to identify and mitigate
          risks.
        </li>
        <li>
          Collaborated with teams to enhance security measures and responses.
        </li>
      </ul>
    </div>
  );
}

export default Experience;
