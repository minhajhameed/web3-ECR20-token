"use client";

import { StateContextProvider } from "@Context";
import React, { useState } from "react";

const Provider = ({ children }) => {

  return <StateContextProvider>{children}</StateContextProvider>;
};

export default Provider;
