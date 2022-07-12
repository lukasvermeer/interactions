---
layout: default
title: The Other Options
nav_order: 2
---

# The Other Options
{: .no_toc }

Compare to _what_ exactly?
{: .fs-6 .fw-300 }

There are only bad options. It does not make sense to think of the risks and downsides associated with running overlapping experiments in isolation, only in comparison to what other options we have.

This page tries to list out *all* the available options. Once you understand that we must choose one of these, I hope you will agree with me that overlapping experiments are truly the least of several evils.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Options

## Not Testing Every Change

Make changes without testing them. Effectively shipping blind.

## Sequential Isolation

Make fewer changes at the same time. In fact, make only one change at any given time. Only after a decision is made will we start the next test. Drastically reduces velocity and usually results in Not Testing Every Change (see above).

## Parallel Isolation

Isolate traffic during the test. Drastically reduces power (to fix that running longer would be equivalent to option one) AND introduces a challenge when shipping two tests. If we find two winners, we can only ship ONE of these tests. They have never been tested together, so if we ship both, we have no idea what will happen. If we have two winning tests, we will thus need a third test to see what the combined effect is.

## Orthogonally Overlapping

Risk interaction effects, but test to see if we can detect any.

# Conclusion

IMHO all of the other options are worse than risking interaction effects. Especially considering:

1. Interaction effects are rare [citation needed].
2. Interaction effects can be detected (only if we run overlapping).
3. Interaction effects can be informative (only if detected).

Running overlapping thus is not just the least bad of all options in terms of tactical execution, it also carries advantages because testing for interaction effects brings new information.
