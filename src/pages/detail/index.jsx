import React, { memo, useState } from "react";
import PropTypes from "proptypes";

import { useLoad } from "@tarojs/taro";
import { View, WebView } from "@tarojs/components";
import styles from "./index.module.scss";

const Detail = memo(() => {
  const [link, setLink] = useState(null);
  useLoad((options) => {
    console.log("options", options);
    setLink(options.link);
  });
  return <WebView src={link} className={styles["detail"]}></WebView>;
});

export default Detail;
Detail.prototype = {};
