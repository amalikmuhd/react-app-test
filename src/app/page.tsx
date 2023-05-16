"use client";
import {useEffect, useState} from "react";
import LandingPage from "../app/screens/LandingPage";
import Loading from "./components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return loading ? <Loading /> : <LandingPage />;
}
