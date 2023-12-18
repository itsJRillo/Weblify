"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import "../app/styles/grid.css";
import CardWeb from "./CardWeb";
import { Chip } from "@mui/material";
import {
  Code,
  HealthAndSafety,
  DesignServices,
  Business,
  Book,
} from "@mui/icons-material";

function ListWebs() {
  
  const supabase = createClient(process.env.API_URL, process.env.ANON_PUBLIC_KEY);
  
  const [webs, setWebs] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("webs").select("*");
      if (error) {
        console.log(error);
        setWebs([]);
        return;
      }

      if (data) {
        setWebs(data);
      }
    };

    fetchData();
  }, []);

  const handleChipClick = (type) => {
    setSelectedType(type);
  };

  const handleResetFilter = () => {
    setSelectedType(null);
  };

  const filteredWebs = selectedType
    ? webs.filter((web) => web.type === selectedType)
    : webs;

  return (
    <div>
      <div className="text-center">
        <Chip
          clickable
          style={{ color: "white", padding: "10px", margin: "5px" }}
          size="small"
          label="All"
          color={selectedType === null ? "primary" : "default"}
          onClick={handleResetFilter}
          variant="outlined"
        />
        <Chip
          icon={<Business />}
          clickable
          style={{ color: "white", padding: "10px", margin: "5px" }}
          size="small"
          label="Ventas y marketing"
          color={selectedType === "Ventas y marketing" ? "primary" : "default"}
          onClick={() => handleChipClick("Ventas y marketing")}
          variant="outlined"
        />
        <Chip
          icon={<Book />}
          clickable
          style={{ color: "white", padding: "10px", margin: "5px" }}
          size="small"
          label="Blog"
          color={selectedType === "Blog" ? "primary" : "default"}
          onClick={() => handleChipClick("Blog")}
          variant="outlined"
        />
        <Chip
          icon={<HealthAndSafety />}
          clickable
          style={{ color: "white", padding: "10px", margin: "5px" }}
          size="small"
          label="Salud y bienestar"
          color={selectedType === "Salud y bienestar" ? "primary" : "default"}
          onClick={() => handleChipClick("Salud y bienestar")}
          variant="outlined"
        />
        <Chip
          icon={<Code />}
          clickable
          style={{ color: "white", padding: "10px", margin: "5px" }}
          size="small"
          label="Desarrollo"
          color={selectedType === "Desarrollo" ? "primary" : "default"}
          onClick={() => handleChipClick("Desarrollo")}
          variant="outlined"
        />
        <Chip
          icon={<DesignServices />}
          clickable
          style={{ color: "white", padding: "10px", margin: "5px" }}
          size="small"
          label="Diseño"
          color={selectedType === "Diseño" ? "primary" : "default"}
          onClick={() => handleChipClick("Diseño")}
          variant="outlined"
        />
      </div>

      {filteredWebs.length > 0 && (
        <div className="container">
          <div className="gridWeb">
            {filteredWebs.map((web) => (
              <CardWeb key={web.id} web={web} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListWebs;
