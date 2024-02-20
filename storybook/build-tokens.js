import { registerTransforms, permutateThemes } from '@tokens-studio/sd-transforms';
import { readFileSync } from 'node:fs';
import StyleDictionary from 'style-dictionary';

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
registerTransforms(StyleDictionary, {
  expand: {
    composition: false,
    typography: false,
    border: false,
    shadow: false,
  },
  excludeParentKeys: false,
});

const $themes = JSON.parse(readFileSync('tokens/$themes.json', 'utf-8'));
const themes = permutateThemes($themes, { seperator: '_' });
const configs = Object.entries(themes).map(([name, tokensets]) => ({
  source: tokensets.map((tokenset) => `${tokenset}.json`),
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      prefix: 'sd',
      buildPath: 'build/css/',
      files: [
        {
          destination: `_variables-${name}.css`,
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/scss/',
      files: [
        {
          destination: `variables-${name}.scss`,
          format: 'scss/variables',
        },
      ],
    },
  },
}));

for (const cfg of configs) {
  const sd = StyleDictionary.extend(cfg);
  // optionally, cleanup files first..
  sd.cleanAllPlatforms();
  sd.buildAllPlatforms();
}
