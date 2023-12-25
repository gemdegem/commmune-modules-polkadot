"use client";

import classNames from "classnames";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import ModulesService from "@/services/modules-service";
import { enablePolkadotExtension } from "@/services/polkadotClient";
import classes from "./modules.module.css";
import SearchBar from "./components/search-bar";

const PolkadotWallet = dynamic(() => import("@/components/PolkadotWallet"), { ssr: false });
const DynamicModuleTile = dynamic(() => import("./components/module-tile/module-tile"), { ssr: false });

function ModulesPage() {
  const [modulesList, setModulesList] = useState<any[]>([]);

  const handleModulesFetched = (modules: string[]) => {
    setModulesList(modules.map((moduleName: string) => ({ name: moduleName })));
  };

  useEffect(() => {
    async function fetchModules() {
      const modules = await ModulesService.getModulesList();
      setModulesList(modules);
    }

    fetchModules();
  }, []);

  return (
    <main className={classNames(classes.content, "flex flex-col items-center justify-center my-auto")}>
      <PolkadotWallet onModulesFetched={handleModulesFetched} />
      <SearchBar />
      <ul className={classes.modulesList}>
        {modulesList.map((module, index) => (
          <DynamicModuleTile key={index} {...module} />
        ))}
      </ul>
    </main>
  );
}

export default ModulesPage;
