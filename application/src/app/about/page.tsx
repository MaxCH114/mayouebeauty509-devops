import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MayoueBeauty509",
  description:
    "Learn more about MayoueBeauty509 — beauty, style, and carefully selected products.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to{" "}
          <span className="text-primary">MayoueBeauty509</span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground leading-8">
          MayoueBeauty509 is a beauty and lifestyle store created with love,
          bringing carefully selected products, beauty essentials, and stylish
          finds to our customers.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-xl border">
            <h2 className="text-xl font-semibold">Beauty</h2>
            <p className="mt-2 text-muted-foreground">
              Discover products selected to help you look and feel your best.
            </p>
          </div>

          <div className="p-6 rounded-xl border">
            <h2 className="text-xl font-semibold">Quality</h2>
            <p className="mt-2 text-muted-foreground">
              We focus on products that offer value, style, and quality.
            </p>
          </div>

          <div className="p-6 rounded-xl border">
            <h2 className="text-xl font-semibold">Our Story</h2>
            <p className="mt-2 text-muted-foreground">
              MayoueBeauty509 is being built as a family business with a vision
              for something bigger.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
