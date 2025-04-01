import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Barchart = () => {
  const [data, setData] = useState([]);
  const [biasedSentences, setBiasedSentences] = useState([]);
  const [biasedPercentage, setBiasedPercentage] = useState(0);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("analysisResults"));

    if (result && result.results) {
      let biasCount = 0;
      let neutralCount = 0;
      let biasSentences = [];

      result.results.forEach((r) => {
        if (r.label === "BIAS") {
          biasCount++;
          biasSentences.push(r.sentence);
        } else if (r.label === "NEUTRAL") {
          neutralCount++;
        }
      });

      const total = biasCount + neutralCount;
      const biasPercentage = total > 0 ? ((biasCount / total) * 100).toFixed(2) : 0;

      setData([
        { category: "BIAS", count: biasCount },
        { category: "NEUTRAL", count: neutralCount },
      ]);
      setBiasedSentences(biasSentences);
      setBiasedPercentage(biasPercentage);
    }
  }, []);

  return (
    <div className="results-page w-full py-2">
      <h2 className="r-heading text-md font-bold my-4 pb-4 border-bottom">Gender Bias Analysis</h2>
      <h3 className="percent text-sm my-4 pt-2">Biased Percentage : {biasedPercentage}%</h3>

      {data.length > 0 && (
        <ResponsiveContainer className="chart-container">
          <BarChart data={data} >
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      )}

      <h3 className="percent text-md font-bold mt-6 pt-5">Biased Data :</h3>
      <ul className="list-disc list-inside mt-2">
        {biasedSentences.map((sentence, index) => (
          <li key={index} className="text-sm my-1">{sentence}</li>
        ))}
      </ul>
    </div>
  );
};

export default Barchart;
