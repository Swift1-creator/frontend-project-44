#!/usr/bin/env node
import { runGame }
from '../src/index.js'
import { getQuestionAndAnswer }
from '../src/games/calc.js'

runGame({ getQuestionAndAnswer }
)
