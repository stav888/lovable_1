import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-6 font-display text-4xl font-semibold">מדיניות פרטיות</h1>
        <p className="mb-4 text-base text-muted-foreground">
          אנו מחויבים לשמירה על פרטיות המבקרים והלקוחות. דוגמה זו מציגה דף מדיניות פרטיות קצר — יש להחליף בתוכן משפטי ורלוונטי למצבכם.
        </p>
        <h2 className="mt-6 mb-2 text-xl font-medium">איסוף מידע</h2>
        <p className="text-sm text-muted-foreground">אנו אוספים מידע שנשלח באופן ישיר דרך טפסים באתר וכן נתונים אנונימיים לצורכי אנליטיקה.</p>

        <h2 className="mt-6 mb-2 text-xl font-medium">שימוש במידע</h2>
        <p className="text-sm text-muted-foreground">המידע משמש למתן שירות, שיפור המוצר והתכתבויות טכניות ושיווקיות בהתאם להסכמות המשתמש.</p>

        <h2 className="mt-6 mb-2 text-xl font-medium">יצירת קשר</h2>
        <p className="text-sm text-muted-foreground">לשאלות בנוגע לפרטיות פנה אלינו דרך הדף צור קשר.</p>
      </div>
      <Footer />
    </main>
  );
}
