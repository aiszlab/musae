#!/usr/bin/env zx

import { $ } from "zx";

const logs = await $`git log`.text();

console.log(logs);
