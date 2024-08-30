import {
  Button,
  Card,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Record,
  ResizablePanel,
  ResizablePanelGroup,
  Slider,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components";

import { CATEGORIES } from "@/constants";
import { formatCurrency } from "@/lib";
import { ArrowLeft, ArrowRight, EyeIcon, Plus } from "lucide-react";
import { useContext } from "react";
import { DialogContext } from "../_app";

const Records = () => {
  const { btnRef } = useContext(DialogContext);

  const handleClick = () => btnRef.current.click();

  return (
    <div>
      <ResizablePanelGroup direction="horizontal" className="flex gap-6">
        <ResizablePanel maxSize={23.5}>
          <Card className="flex flex-col gap-6 px-4 py-6">
            <p>Records</p>
            <Button
              onClick={handleClick}
              className={"px-3 rounded-5 h-8 rounded-[20px] bg-[#0166FF]"}>
              Add Record
            </Button>
            <Input placeholder="Search" className="rounded-[8px] h-8" />
            <div className="flex flex-col gap-4">
              <Label>Types</Label>
              <RadioGroup defaultValue="All">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="All" id="r1" />
                  <Label htmlFor="r1">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Income" id="r2" />
                  <Label htmlFor="r2">Income</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Expense" id="r3" />
                  <Label htmlFor="r3">Expense</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-[#1F2937] ">
                <Label>Category</Label>
                <Label className="opacity-[20%]">Clear</Label>
              </div>
              {CATEGORIES.map((category) => {
                return (
                  <div key={category} className="flex items-center gap-2 px-3 rounded-[8px]">
                    <EyeIcon
                      size={20}
                      strokeWidth={3.7}
                      stroke="#94A3B8"
                      stopColor="#fff"
                    />
                    <Label>{category}</Label>
                  </div>
                );
              })}
              <Button className="flex justify-start gap-2 w-[125px] h-8 bg-transparent px-3">
                <Plus size={20} color="#0166FF" />
                <Label className="text-[#1F2937] leading-6">Category</Label>
              </Button>
              <div className="flex flex-col gap-4">
                <Label>Amount Range</Label>
                <div className="flex gap-4">
                  <Input defaultValue="0" />
                  <Input defaultValue="1000" />
                </div>
                <Slider defaultValue={[0, 1000]} max={1000} />
              </div>
            </div>
          </Card>
        </ResizablePanel>
        <ResizablePanel minSize={76.5}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button className="flex items-center justify-center size-8 bg-[#E5E7EB] rounded-[8px]">
                  <div>
                    <ArrowLeft size={15} className="text-black" />
                  </div>
                </Button>
                <Label className="leading-6">Last 30 Days</Label>
                <Button className="size-8 bg-[#E5E7EB] rounded-[8px] flex items-center justify-center">
                  <div>
                    <ArrowRight size={15} className="text-black" />
                  </div>
                </Button>
              </div>
              <div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px] h-12 rounded-[8px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Record label="Select All" balance={formatCurrency(-35500)} />
            <div className="flex flex-col gap-3">
              <Label className="font-semibold leading-6">Today</Label>
              <Record
                label="Lending & Renting"
                balance={formatCurrency(-35500)}
                date="14:00">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none">
                  <circle cx="20" cy="20" r="20" fill="#FF4545" />
                  <path
                    d="M26.875 13.125V27.5C26.875 27.6658 26.8092 27.8247 26.6919 27.9419C26.5747 28.0592 26.4158 28.125 26.25 28.125C26.0842 28.125 25.9253 28.0592 25.8081 27.9419C25.6908 27.8247 25.625 27.6658 25.625 27.5V23.75H21.875C21.7092 23.75 21.5503 23.6842 21.4331 23.5669C21.3158 23.4497 21.25 23.2908 21.25 23.125C21.279 21.6279 21.4681 20.1382 21.8141 18.6813C22.5781 15.518 24.0266 13.3977 26.0039 12.5508C26.0989 12.5101 26.2026 12.4936 26.3056 12.5028C26.4086 12.512 26.5077 12.5466 26.594 12.6035C26.6803 12.6604 26.7512 12.7378 26.8002 12.8288C26.8493 12.9199 26.875 13.0216 26.875 13.125ZM19.3664 13.0227C19.3542 12.9406 19.3257 12.8618 19.2827 12.7908C19.2397 12.7199 19.183 12.6582 19.1158 12.6094C19.0487 12.5606 18.9726 12.5257 18.8918 12.5066C18.8111 12.4875 18.7273 12.4847 18.6455 12.4984C18.5636 12.512 18.4853 12.5418 18.4151 12.586C18.3449 12.6303 18.2842 12.688 18.2366 12.756C18.1889 12.8239 18.1553 12.9006 18.1376 12.9817C18.1199 13.0628 18.1186 13.1465 18.1336 13.2281L18.7414 16.875H16.875V13.125C16.875 12.9592 16.8092 12.8003 16.6919 12.6831C16.5747 12.5659 16.4158 12.5 16.25 12.5C16.0842 12.5 15.9253 12.5659 15.8081 12.6831C15.6908 12.8003 15.625 12.9592 15.625 13.125V16.875H13.7586L14.3664 13.2281C14.3814 13.1465 14.3801 13.0628 14.3624 12.9817C14.3447 12.9006 14.3111 12.8239 14.2634 12.756C14.2158 12.688 14.1551 12.6303 14.0849 12.586C14.0147 12.5418 13.9364 12.512 13.8545 12.4984C13.7727 12.4847 13.6889 12.4875 13.6082 12.5066C13.5274 12.5257 13.4513 12.5606 13.3842 12.6094C13.317 12.6582 13.2603 12.7199 13.2173 12.7908C13.1743 12.8618 13.1458 12.9406 13.1336 13.0227L12.5086 16.7727C12.503 16.8065 12.5001 16.8407 12.5 16.875C12.5012 17.7608 12.8156 18.6176 13.3874 19.2941C13.9592 19.9706 14.7518 20.4232 15.625 20.5719V27.5C15.625 27.6658 15.6908 27.8247 15.8081 27.9419C15.9253 28.0592 16.0842 28.125 16.25 28.125C16.4158 28.125 16.5747 28.0592 16.6919 27.9419C16.8092 27.8247 16.875 27.6658 16.875 27.5V20.5719C17.7482 20.4232 18.5408 19.9706 19.1126 19.2941C19.6844 18.6176 19.9988 17.7608 20 16.875C19.9999 16.8407 19.997 16.8065 19.9914 16.7727L19.3664 13.0227Z"
                    fill="white"
                  />
                </svg>
              </Record>
              <Record
                label="Lending & Renting"
                balance={formatCurrency(-35500)}
                date="14:00">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none">
                  <circle cx="20" cy="20" r="20" fill="#0166FF" />
                  <path
                    d="M27.5 19.0274V26.25C27.5 26.5815 27.3683 26.8995 27.1339 27.1339C26.8995 27.3683 26.5815 27.5 26.25 27.5H23.125C22.7935 27.5 22.4755 27.3683 22.2411 27.1339C22.0067 26.8995 21.875 26.5815 21.875 26.25V23.125C21.875 22.9593 21.8092 22.8003 21.6919 22.6831C21.5747 22.5659 21.4158 22.5 21.25 22.5H18.75C18.5842 22.5 18.4253 22.5659 18.3081 22.6831C18.1908 22.8003 18.125 22.9593 18.125 23.125V26.25C18.125 26.5815 17.9933 26.8995 17.7589 27.1339C17.5245 27.3683 17.2065 27.5 16.875 27.5H13.75C13.4185 27.5 13.1005 27.3683 12.8661 27.1339C12.6317 26.8995 12.5 26.5815 12.5 26.25V19.0274C12.5 18.8544 12.5359 18.6832 12.6054 18.5248C12.6749 18.3664 12.7766 18.2241 12.9039 18.107L19.1539 12.2102L19.1625 12.2016C19.3926 11.9923 19.6925 11.8763 20.0035 11.8763C20.3146 11.8763 20.6144 11.9923 20.8445 12.2016C20.8472 12.2046 20.8501 12.2075 20.8531 12.2102L27.1031 18.107C27.2292 18.2248 27.3295 18.3673 27.3978 18.5257C27.4661 18.6841 27.5009 18.8549 27.5 19.0274Z"
                    fill="white"
                  />
                </svg>
              </Record>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Records;
