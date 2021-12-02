//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import { storiesOf } from "@storybook/react";
import React from "react";

import SDFGenerator from "../utils/SDFGenerator";

const DEFAULT_ATLAS_CONFIG = {
  fontSize: 14,
  fontFamily: "sans-serif",
  charSet: new Set(
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".split("")
  ),
};

const SDFGeneratorStory = () => {
  const [fontSize, setFontSize] = React.useState(14);

  const onFontSizeRangeChanged = React.useCallback((ev) => {
    setFontSize(ev.target.value);
  }, []);

  const atlasConfigs = React.useMemo(() => [{ ...DEFAULT_ATLAS_CONFIG, fontSize }], [fontSize]);

  return (
    <div>
      <label>
        Font size
        <input type="range" min={10} max={150} value={fontSize} onChange={onFontSizeRangeChanged} />
      </label>
      <SDFGenerator atlasConfigs={atlasConfigs} />
    </div>
  );
};

storiesOf("Worldview/SDFGenerator", module).add("default", () => {
  return <SDFGeneratorStory />;
});
