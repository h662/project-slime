import { FC } from "react";
import { useTranslation } from "react-i18next";

interface ReportCardProps {
  order: number;
  titleKey: string;
  descriptionKey: string;
  points?: {
    labelKey: string;
    valueKey: string;
  }[];
}

const ReportCard: FC<ReportCardProps> = ({
  order,
  titleKey,
  descriptionKey,
  points,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mt-3 md:mt-6">
      <div className="md:text-xl border-2 border-black w-fit p-1 md:p-2">
        {order} {t(titleKey)}
      </div>
      <div className="mt-2 md:mt-4 text-sm md:text-base">
        {t(descriptionKey)}
        {points && (
          <ul className="flex flex-col gap-1 md:gap-2 mt-2 md:mt-4">
            {points.map((v, i) => (
              <li key={i}>
                <span className="font-semibold underline underline-offset-4">
                  {t(v.labelKey)}
                </span>
                : {t(v.valueKey)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
