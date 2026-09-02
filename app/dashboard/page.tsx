 
import Content from "../home/content/page";
import Home from "../home/page";
import Point1 from "../home/point1/page";
import Point2 from "../home/point2/page"; 
import Point3 from "../home/point3/page";
import Point4 from "../home/point4/page";

// dashboard/page.tsx
export default function Dashboard() {
  return (
    <main className="[container-type:inline-size] transition-all duration-300">
      <section id="home"><Home /></section>
      <section id="content"><Content /></section>
      <section id="point1"><Point1 /></section>
      <section id="point2"><Point2 /></section>
      <section id="point3"><Point3 /></section>
      <section id="point4"><Point4 /></section>
    </main>
  );
}