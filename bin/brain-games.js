#!/usr/bin/env node
import Game from './brain-even.js';
import { username, cli } from '../src/cli.js';

cli();
Game(username);
