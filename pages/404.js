import Link from "next/Link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function ErrorPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
      <div className="error">
        <h1>404</h1>
        <h3>Sorry the page is not found</h3>
        <button className="error-button">
          <Link href="/">Back to the home page</Link>
        </button>
      </div>
    </>
  );
}

export default ErrorPage;
