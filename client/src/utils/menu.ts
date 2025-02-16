import { HomeIcon, LogOutIcon,User2, GraduationCap, History, MessageCircle, Workflow, Wallet2 } from "lucide-react";
import { paths } from "@/router/path";


interface MenuOptions{
    [key: string]: {
        name: string
    icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
        size?: number | undefined;
    }>
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
            name: "History",
            icon: History,
            path: "/dashboard",
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
        }
    ],
    general: [
        {
            name: "Logout",
            icon: LogOutIcon,
            path: "/dashboard",
        },
    ],
};