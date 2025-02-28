import { GlobeAltIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function EducationSection({ data }) {
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 rounded-xl">
      <div className="w-full flex flex-col gap-4 items-start text-neutral-700 dark:text-neutral-200 text-left">
        {(data?.education.values || []).map((education, index) => (
          <div
            key={index}
            className="w-full p-5 rounded-3xl border dark:border-neutral-600/50 border-neutral-400/25 bg-neutral-200/[0.4] dark:bg-neutral-700/[0.4]"
          >
            <div className="flex sm:justify-between flex-col sm:flex-row items-start sm:items-center mb-2">
              <h3 className="font-bold text-base text-neutral-900 dark:text-white">
                {education.institute}
              </h3>
              <div className="flex items-center gap-2">
                {education.website && (
                  <a
                    href={education.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center h-8 font-medium text-primary-700 dark:text-primary-500 transition-all duration-500 px-3 py-2 rounded-full bg-neutral-200/[0.5] dark:bg-neutral-700/[0.5] hover:bg-primary-100 dark:hover:bg-primary-900"
                    title={`Open ${education.institute} website`}
                  >
                    <ArrowUpRightIcon className="w-0 h-0 group-hover:w-4 group-hover:h-4 transition-all duration-500" />
                    <GlobeAltIcon className="w-4 h-4 group-hover:w-0 group-hover:h-0 transition-all duration-500" />
                    <p className="ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
                      {education.website
                        .replace(/^https?:\/\/(www\.)?/, "")
                        .replace(/\/.*$/, "")}
                    </p>
                  </a>
                )}
                <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                  {education.location}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <p className="font-medium text-neutral-700 dark:text-neutral-200">
                {education.degree}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {education.year}
              </p>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-2">
              {education.result}
            </p>
            {education.activities &&
              Array.isArray(education.activities) &&
              education.activities.length > 0 && (
                <>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    Volunteering Activities
                  </p>
                  <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                    {education.activities.map((activity, actIndex) => (
                      <li key={actIndex}>{activity}</li>
                    ))}
                  </ul>
                </>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
