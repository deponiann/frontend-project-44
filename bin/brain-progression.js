#!/usr/bin/env node
/* eslint-disable no-bitwise */
import { username, cli } from '../src/cli.js';
import progressionGame from '../src/games/progressionGame.js';

cli();
progressionGame(username);
