import React from "react";
import mongoDBIcon from "../../assets/images/databaseImage/mongodb-icon.svg";
import postgresqlIcon from "../../assets/images/databaseImage/postgresql-icon.svg";
import mySqlIcon from "../../assets/images/databaseImage/mysql-icon.svg";
import elasticSearchIcon from "../../assets/images/databaseImage/elasticsearch-icon.svg";

export default function Database() {
  return (
    <div>
      {" "}
      <section className="skill">
        <h3 className="h3 skills-title">Database </h3>
        <img
          src={mongoDBIcon}
          alt="mongoDB"
          style={{
            width: "62px",
            height: "62px",
            display: "inline-block",
            // backgroundColor: "white",
          }}
        />{" "}
        <img
          src={elasticSearchIcon}
          alt="mongoDB"
          style={{
            width: "62px",
            height: "62px",
            display: "inline-block",
            // backgroundColor: "white",
          }}
        />
        <img
          src={postgresqlIcon}
          alt="postgresql"
          style={{
            width: "62px",
            height: "62px",
            display: "inline-block",
          }}
        />
        <img
          src={mySqlIcon}
          alt="mySQL"
          style={{
            width: "62px",
            height: "62px",
            display: "inline-block",
          }}
        />
      </section>
    </div>
  );
}
