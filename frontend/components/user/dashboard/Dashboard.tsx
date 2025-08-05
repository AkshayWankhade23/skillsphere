// import React from 'react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Overview } from '@/components/dashboard/overview'
// import { RecentActivities } from '@/components/dashboard/recent-activities'

// const Dashboard = () => {
//   return (
//     <div className="flex-1 space-y-4 p-8 pt-6">
//       <div className="flex items-center justify-between space-y-2">
//         <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
//       </div>
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Total Skills
//             </CardTitle>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="h-4 w-4 text-muted-foreground"
//             >
//               <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//             </svg>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">28</div>
//             <p className="text-xs text-muted-foreground">
//               +2 since last month
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Completed Skills
//             </CardTitle>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="h-4 w-4 text-muted-foreground"
//             >
//               <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//               <circle cx="9" cy="7" r="4" />
//               <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
//             </svg>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">12</div>
//             <p className="text-xs text-muted-foreground">
//               +10% from last month
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">In Progress</CardTitle>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="h-4 w-4 text-muted-foreground"
//             >
//               <rect width="20" height="14" x="2" y="5" rx="2" />
//               <path d="M2 10h20" />
//             </svg>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">5</div>
//             <p className="text-xs text-muted-foreground">
//               +3 since last week
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Completion Rate
//             </CardTitle>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="h-4 w-4 text-muted-foreground"
//             >
//               <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//             </svg>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">43%</div>
//             <p className="text-xs text-muted-foreground">
//               +5% since last month
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
//         <Card className="col-span-4">
//           <CardHeader>
//             <CardTitle>Your Progress</CardTitle>
//             <CardDescription>
//               Track your skill development progress over time
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="pl-2">
//             {/* Placeholder for chart component */}
//             <div className="h-[200px] bg-muted rounded-md flex items-center justify-center text-muted-foreground">
//               Progress Chart
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="col-span-3">
//           <CardHeader>
//             <CardTitle>Recent Activities</CardTitle>
//             <CardDescription>
//               You completed 12 tasks this month
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {/* Placeholder for recent activities */}
//               <div className="flex items-center">
//                 <div className="mr-4 bg-primary/10 p-2 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="h-4 w-4 text-primary"
//                   >
//                     <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//                   </svg>
//                 </div>
//                 <div className="space-y-1">
//                   <p className="text-sm font-medium leading-none">
//                     Completed JavaScript Basics
//                   </p>
//                   <p className="text-xs text-muted-foreground">
//                     2 days ago
//                   </p>
//                 </div>
//                 <div className="ml-auto font-medium">+5 points</div>
//               </div>
//               <div className="flex items-center">
//                 <div className="mr-4 bg-primary/10 p-2 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="h-4 w-4 text-primary"
//                   >
//                     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                     <circle cx="9" cy="7" r="4" />
//                     <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//                     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                   </svg>
//                 </div>
//                 <div className="space-y-1">
//                   <p className="text-sm font-medium leading-none">
//                     Started React Fundamentals
//                   </p>
//                   <p className="text-xs text-muted-foreground">
//                     4 days ago
//                   </p>
//                 </div>
//                 <div className="ml-auto font-medium">+2 points</div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard