import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import ReportCard from "../components/ReportCard";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const reportCardData = [
  <ReportCard
    order={1}
    titleKey="overview"
    descriptionKey="overviewDescription"
  />,
  <ReportCard
    order={2}
    titleKey="resultAnalysis"
    descriptionKey="resultDescription"
    points={[
      {
        labelKey: "conversionRate",
        valueKey: "conversionRateDescription",
      },
      {
        labelKey: "conversionTime",
        valueKey: "conversionTimeDescription",
      },
      {
        labelKey: "slimeCharacteristics",
        valueKey: "slimeCharacteristicsDescription",
      },
    ]}
  />,
  <ReportCard
    order={3}
    titleKey="researchFindings"
    descriptionKey="findingsDescription"
    points={[
      {
        labelKey: "diversity",
        valueKey: "diversityDescription",
      },
      {
        labelKey: "applicability",
        valueKey: "applicabilityDescription",
      },
      {
        labelKey: "researchContribution",
        valueKey: "researchContributionDescription",
      },
    ]}
  />,
  <ReportCard
    order={4}
    titleKey="futurePlan"
    descriptionKey="futurePlanDescription"
    points={[
      {
        labelKey: "facilityExpansion",
        valueKey: "facilityExpansionDescription",
      },
      {
        labelKey: "reinforceResearchStaff",
        valueKey: "reinforceResearchStaffDescription",
      },
      {
        labelKey: "strengthenCollaboration",
        valueKey: "strengthenCollaborationDescription",
      },
      {
        labelKey: "developTechnology",
        valueKey: "developTechnologyDescription",
      },
    ]}
  />,
];

const Report: FC = () => {
  const [currentReportCardIndex, setCurrentReportCardIndex] =
    useState<number>(0);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const onClickPrev = () => {
    if (currentReportCardIndex === 0) {
      setCurrentReportCardIndex(reportCardData.length - 1);
    } else {
      setCurrentReportCardIndex(currentReportCardIndex - 1);
    }
  };

  const onClickNext = () => {
    if (currentReportCardIndex === reportCardData.length - 1) {
      setCurrentReportCardIndex(0);
    } else {
      setCurrentReportCardIndex(currentReportCardIndex + 1);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="relative max-w-screen-md w-full border-2 border-gray-300 p-4 md:p-8 flex flex-col">
        <button
          className="absolute top-0 left-0 m-2 button-style-sm w-8 h-8 md:w-10 md:h-10 text-lg md:text-2xl"
          onClick={() => navigate(-1)}
        >
          <FaAngleLeft />
        </button>
        <div className="flex flex-col-reverse md:flex-row">
          <h1 className="grow font-semibold text-lg md:text-2xl bg-slimeGreen-200 border-2 border-black p-2 md:p-4 mt-4 md:mt-0">
            {t("slimeProjectReport")}
          </h1>
          <div className="text-[8px] md:text-xs self-end flex min-w-[200px] md:ml-20 text-center border-2 border-black">
            <div className="flex flex-col w-full">
              <div className="border-b-2 border-r-2 border-black">
                {t("signatory")}
              </div>
              <div className="h-full border-r-2 border-black flex justify-center">
                <img
                  className="w-[42px] text-200"
                  src="/images/logo.svg"
                  alt="slime-project"
                />
              </div>
            </div>
            <div className="flex flex-col w-full text-white">
              <div className="border-b-2 border-r-2 border-black">
                {t("signatory")}
              </div>
              <div className="h-full border-r-2 border-black"></div>
            </div>
            <div className="flex flex-col w-full text-white">
              <div className="border-b-2 border-r-2 border-black">
                {t("signatory")}
              </div>
              <div className="h-full border-r-2 border-black"></div>
            </div>
            <div className="flex flex-col w-full text-white">
              <div className="border-b-2 border-black">{t("signatory")}</div>
              <div className="h-full"></div>
            </div>
          </div>
        </div>
        <h2 className="text-sm md:text-lg border-y-2 border-black px-4 md:px-8 py-1 md:py-2 mt-4 md:mt-8">
          {t("reportSummary")}
        </h2>
        <div className="mt-1 md:mt-2 block md:hidden">
          {reportCardData[currentReportCardIndex]}
          <div className="mt-4 flex justify-center gap-2">
            <button className="button-style-sm" onClick={onClickPrev}>
              <FaAngleLeft />
            </button>
            <button className="button-style-sm" onClick={onClickNext}>
              <FaAngleRight />
            </button>
          </div>
        </div>
        <ol className="mt-1 md:mt-2 hidden md:block">
          {reportCardData.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Report;
