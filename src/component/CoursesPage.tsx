import { useSearch } from '@tanstack/react-router';
import CourseCard from './CourseCard';
import Filter from './Filter';
import CourseHorizontalCard from './CourseHorizontalCard';
import { Switch } from '@mantine/core';
import ListViewIcon from '../assets/ListViewIcon.tsx';
import { useEffect, useState } from 'react';
import GridViewIcon from '../assets/GridViewIcon.tsx';

export default function CoursesPage() {
  const { search, category } = useSearch({
    from: '/courses/',
  });
  const [checked, setChecked] = useState(true);
  useEffect(() => {}, []);

  function handelSwitch(e: React.ChangeEvent<HTMLInputElement>) {
    if (window.matchMedia('(min-width: 640px)').matches) setChecked(e.currentTarget.checked);
    else setChecked(true);
  }

  return (
    <div className="mx-10 my-10">
      {category && (
        <div>
          <h1 className=" mt-[30px] text-[42px] font-semibold capitalize text-themeBlack">{category} Courses</h1>
          <div className=" mt-1 flex items-center gap-2">
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 16.5V13.7C0 13.1333 0.145833 12.6125 0.4375 12.1375C0.729167 11.6625 1.11667 11.3 1.6 11.05C2.63333 10.5333 3.68333 10.1458 4.75 9.8875C5.81667 9.62917 6.9 9.5 8 9.5C9.1 9.5 10.1833 9.62917 11.25 9.8875C12.3167 10.1458 13.3667 10.5333 14.4 11.05C14.8833 11.3 15.2708 11.6625 15.5625 12.1375C15.8542 12.6125 16 13.1333 16 13.7V16.5H0ZM18 16.5V13.5C18 12.7667 17.7958 12.0625 17.3875 11.3875C16.9792 10.7125 16.4 10.1333 15.65 9.65C16.5 9.75 17.3 9.92083 18.05 10.1625C18.8 10.4042 19.5 10.7 20.15 11.05C20.75 11.3833 21.2083 11.7542 21.525 12.1625C21.8417 12.5708 22 13.0167 22 13.5V16.5H18ZM8 8.5C6.9 8.5 5.95833 8.10833 5.175 7.325C4.39167 6.54167 4 5.6 4 4.5C4 3.4 4.39167 2.45833 5.175 1.675C5.95833 0.891667 6.9 0.5 8 0.5C9.1 0.5 10.0417 0.891667 10.825 1.675C11.6083 2.45833 12 3.4 12 4.5C12 5.6 11.6083 6.54167 10.825 7.325C10.0417 8.10833 9.1 8.5 8 8.5ZM18 4.5C18 5.6 17.6083 6.54167 16.825 7.325C16.0417 8.10833 15.1 8.5 14 8.5C13.8167 8.5 13.5833 8.47917 13.3 8.4375C13.0167 8.39583 12.7833 8.35 12.6 8.3C13.05 7.76667 13.3958 7.175 13.6375 6.525C13.8792 5.875 14 5.2 14 4.5C14 3.8 13.8792 3.125 13.6375 2.475C13.3958 1.825 13.05 1.23333 12.6 0.7C12.8333 0.616667 13.0667 0.5625 13.3 0.5375C13.5333 0.5125 13.7667 0.5 14 0.5C15.1 0.5 16.0417 0.891667 16.825 1.675C17.6083 2.45833 18 3.4 18 4.5ZM2 14.5H14V13.7C14 13.5167 13.9542 13.35 13.8625 13.2C13.7708 13.05 13.65 12.9333 13.5 12.85C12.6 12.4 11.6917 12.0625 10.775 11.8375C9.85833 11.6125 8.93333 11.5 8 11.5C7.06667 11.5 6.14167 11.6125 5.225 11.8375C4.30833 12.0625 3.4 12.4 2.5 12.85C2.35 12.9333 2.22917 13.05 2.1375 13.2C2.04583 13.35 2 13.5167 2 13.7V14.5ZM8 6.5C8.55 6.5 9.02083 6.30417 9.4125 5.9125C9.80417 5.52083 10 5.05 10 4.5C10 3.95 9.80417 3.47917 9.4125 3.0875C9.02083 2.69583 8.55 2.5 8 2.5C7.45 2.5 6.97917 2.69583 6.5875 3.0875C6.19583 3.47917 6 3.95 6 4.5C6 5.05 6.19583 5.52083 6.5875 5.9125C6.97917 6.30417 7.45 6.5 8 6.5Z"
                fill="#949697"
              />
            </svg>
            <p className=" text-lg text-themeGray">{'1,048,965'} learners</p>
          </div>
          <div className="mt-8">
            <h1 className=" text-[24px] font-semibold mb-8">Courses to get you started</h1>
            <div className=" grid gap-8 grid-cols-1  min-[848px]:grid-cols-3  min-[1370px]:grid-cols-5  min-[1110px]:grid-cols-4  sm:grid-cols-2 ">
              {[...Array(20)].slice(0, 10).map((item) => (
                <CourseCard />
              ))}
            </div>
          </div>
        </div>
      )}
      <div>
        {category ? (
          <h1 className=" mt-[80px] mb-[30px] text-[42px] font-semibold capitalize text-themeBlack">
            All {category} Courses
          </h1>
        ) : (
          <h1 className=" mt-[50px] mb-[30px] text-[42px] font-semibold text-themeBlack">2,019 results for "{search}"</h1>
        )}
        <div className="flex gap-4">
          <div className=" w-[255px] min-w-[165px] h-fit py-4 rounded-md pl-4 shadow-lg min-[1050px]:block hidden">
            <Filter />
          </div>
          <div className="max-w-[1091px]">
            <div className="flex justify-between   mb-8 text-[24px] font-semibold text-themeBlack">
              <h2>2,019 Courses</h2>
              <Switch
                checked={checked}
                onChange={(event) => handelSwitch(event)}
                size="lg"
                color="#EEEEEE"
                radius="md"
                onLabel={<ListViewIcon themeColor="themeGray" />}
                offLabel={<GridViewIcon themeColor="themeGray" />}
                thumbIcon={checked ? <GridViewIcon themeColor="#307EE1" /> : <ListViewIcon themeColor="#307EE1" />}
              />
            </div>
            <div>
              {checked ? (
                <div className=" grid gap-8 grid-cols-1 min-[600px]:grid-cols-2  xl:grid-cols-4  min-[900px]:grid-cols-3 ">
                  {[...Array(20)].map((item) => (
                    <CourseCard />
                  ))}
                </div>
              ) : (
                <div className="space-y-8 sm:block hidden ">
                  {[...Array(20)].map((item) => (
                    <CourseHorizontalCard />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
