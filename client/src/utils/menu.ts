import { HomeIcon, LogOutIcon,User2, GraduationCap, History, MessageCircle, Workflow, Wallet2, LucideProps, Database } from "lucide-react";
import { paths } from "@/router/path";


interface MenuOptions{
    [key: string]: {
        name: string
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    path: string
    }[]
}


export const menuOptions: MenuOptions = {
    main:[
        {
            name: "Dashboard",
            icon: HomeIcon,
            path: paths.APP.DASHBOARD,
        },
        {
            name: "Students",
            icon: GraduationCap,
            path: '/backend',
        },
        {
            name: "Teachers",
            icon: User2,
            path: "/dashboard",
        },
    ],
    financing: [
        {
            name: "Billing & Usage",
            icon: Wallet2,
            path: paths.APP.BILLING_USAGE,
        },
    ],
    utils:[
        {
            name: "Master Data",
            icon: Database,
            path: paths.APP.MASTER_DATA.INDEX,
        },
        {
            name: "Messages",
            icon: MessageCircle,
            path: "/dashboard",
        },
        {
            name: "Workflow",
            icon: Workflow,
            path: "/dashboard",
        },
        {
            name: "History",
            icon: History,
            path: "/dashboard",
        },
    ],
    general: [
        {
            name: "Logout",
            icon: LogOutIcon,
            path: "/dashboard",
        },
    ],
};