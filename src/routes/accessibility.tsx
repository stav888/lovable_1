import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/accessibility")({
  component: Accessibility,
});

function Accessibility() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-6 font-display text-4xl font-semibold">הצהרת נגישות</h1>
        <p className="mb-4 text-base text-muted-foreground">
          אנו שואפים להנגיש את האתר לכלל המשתמשים. בדף זה מופיעות הנחיות וצעדים שננקטו כדי לשפר את הנגישות.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-medium">סטנדרטים</h2>
        <p className="text-sm text-muted-foreground">האתר שואף לעמוד בעקרונות נגישות בסיסיים ובתקנים מקובלים, כולל שימוש בקונטרסט, תגיות סמנטיות וניווט באמצעות המקלדת.</p>

        <h2 className="mt-6 mb-2 text-xl font-medium">בעיות ידועות</h2>
        <p className="text-sm text-muted-foreground">ייתכנו רכיבים שאינם נגישים לחלוטין. נשמח לקבל דיווחים ונסקור אותם בעדיפות.</p>

        <h2 className="mt-6 mb-2 text-xl font-medium">יצירת קשר</h2>
        <p className="text-sm text-muted-foreground">להגשת בקשות נגישות או דיווח על בעיות, אנא השתמש בטופס צור קשר באתר.</p>
      </div>
      <Footer />
    </main>
  );
}
