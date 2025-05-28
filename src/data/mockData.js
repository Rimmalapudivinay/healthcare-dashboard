export const mockData = {
  user: {
    name: "Dr. Cameron Williamson",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=40&h=40&fit=crop&crop=face"
  },
  healthStatus: {
    lungs: { status: "Check 16 Oct, 2021", color: "bg-red-500" },
    teeth: { status: "Check 16 Oct, 2021", color: "bg-green-500" },
    bone: { status: "Check 16 Oct, 2021", color: "bg-orange-500" }
  },
  appointments: [
    { id: 1, title: "Health checkup complete", time: "11:00 AM", day: "Thursday", icon: "🏥" },
    { id: 2, title: "Ophthalmologist", time: "14:00 PM", day: "Thursday", icon: "👁️" },
    { id: 3, title: "Cardiologist", time: "12:00 AM", day: "Saturday", icon: "❤️" },
    { id: 4, title: "Neurologist", time: "16:00 PM", day: "Saturday", icon: "🧠" }
  ],
  calendarData: {
    month: "October 2021",
    appointments: {
      25: [],
      26: ["09:00"],
      27: ["12:00"],
      28: ["11:00"],
      29: ["14:00", "15:00"],
      30: ["15:00", "09:00"],
      31: ["10:00", "11:00"]
    }
  }
};