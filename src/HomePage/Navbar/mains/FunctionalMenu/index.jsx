// libs
import React from "react";
// components
import { PoweroffOutlined, CloudUploadOutlined } from "@ant-design/icons";
// context
import { useLocale } from "../../../../contexts/LocaleContexts";
// others
import "./style.scss";

const FunctionMenu = () => {
  const { locale, setLocale, localeDataSource } = useLocale();
  return (
    <div className="functional-menu-wrapper">
      <select defaultValue={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="vi">{localeDataSource.vi}</option>
        <option value="en">{localeDataSource.en}</option>
      </select>
      <a href="#" className="turn-off-ads" title="Bật quảng cáo">
        <PoweroffOutlined className="power-off-icon" />
        Tắt quảng cáo
      </a>
      <a href="#" className="upload-icon" title="Upload">
        <CloudUploadOutlined />
      </a>
    </div>
  );
};
export default FunctionMenu;
