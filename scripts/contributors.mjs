#!/usr/bin/env zx

import { $ } from "zx";

await $`git log`.text();
