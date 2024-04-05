import {
  MaterialReactTable,
  MRT_Table,
  useMaterialReactTable,
} from "material-react-table";
import React, { useMemo } from "react";
import './Table.scss';

const Table = ({ columns, data }) => {
  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <div className="table">
      <MRT_Table table={table} />
    </div>
  );
};

export default Table;
