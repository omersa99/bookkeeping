import { ChartOfAccount as TChartOfAccount } from "../api/chartOfAccount/ChartOfAccount";

export const CHARTOFACCOUNT_TITLE_FIELD = "id";

export const ChartOfAccountTitle = (record: TChartOfAccount): string => {
  return record.id || String(record.id);
};
