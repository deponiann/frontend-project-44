#!/usr/bin/env node
/* eslint-disable no-bitwise */
import { username, cli } from '../src/cli.js';
import primeGame from '../src/games/primeGame.js';

cli();
primeGame(username);
