#!/usr/bin/env node
/* eslint-disable no-bitwise */
import { username, cli } from '../src/cli.js';
import gcdGame from '../src/games/gcdGame.js';

cli();
gcdGame(username);
