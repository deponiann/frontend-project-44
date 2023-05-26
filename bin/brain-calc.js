#!/usr/bin/env node
/* eslint-disable no-bitwise */
import { username, cli } from '../src/cli.js';
import calcGame from '../src/games/calcGame.js';

cli();
calcGame(username);
