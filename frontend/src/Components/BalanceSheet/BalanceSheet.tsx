import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet, CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getBalanceSheet } from '../../api';
import RatioList from '../RatioList/RatioList';

type Props = {}
const config = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedForInvestingActivites,
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedProvidedByFinancingActivities,
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) => company.commonStockIssued,
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
  ];
  const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyBalanceSheet>();
    useEffect(() => {
      const getCompanyData = async () => {
        const value = await getBalanceSheet(ticker!);
        setCompanyData(value?.data[0]);
      };
      getCompanyData();
    }, []);
    return (
      <>
        {companyData ? (
          <RatioList config={config} data={companyData} />
        ) : (
          <h1>Company data not found</h1>
        )}
      </>
    );
  };

export default BalanceSheet