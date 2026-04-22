// parameters.js — MDP parameter definitions for all file types, per force field
// each force field has sections for each .mdp step.
// Keys marked  /* TODO */  need real values filled in.
// The 'md' section already has the production values from v0.2.

const FF = {

  // ---------------------------------------------------------------------------
  'BSC1': {
    note: 'PME 1.2 nm, TIP3P, V-rescale, P-R barostat',
    water: 'TIP3P',

    ions: {
      // TODO: fill in ions.mdp parameters for BSC1
      integrator:   'steep',
      nsteps:       1000,
      coulombtype:  'PME',
      rcoulomb:     1.2,
      rvdw:         1.2,
      pbc:          'xyz',
    },

    em: {
      // TODO: fill in em.mdp parameters for BSC1
      integrator:   'steep',
      nsteps:       50000,
      emtol:        1000.0,
      emstep:       0.01,
      coulombtype:  'PME',
      rcoulomb:     1.2,
      rvdw:         1.2,
      pbc:          'xyz',
      constraints:  'none',
    },

    nvt: {
      // TODO: fill in nvt.mdp parameters for BSC1
      integrator:   'md',
      nsteps:       50000,      // 0.1 ns placeholder
      dt:           0.002,
      coulombtype:  'PME',
      rcoulomb:     1.2,
      rvdw:         1.2,
      tcoupl:       'V-rescale',
      pcoupl:       'no',
      constraints:  'h-bonds',
      dispCorr:     'EnerPres',
    },

    npt: {
      // TODO: fill in npt.mdp parameters for BSC1
      integrator:   'md',
      nsteps:       50000,      // 0.1 ns placeholder
      dt:           0.002,
      coulombtype:  'PME',
      rcoulomb:     1.2,
      rvdw:         1.2,
      tcoupl:       'V-rescale',
      pcoupl:       'Parrinello-Rahman',
      constraints:  'h-bonds',
      dispCorr:     'EnerPres',
    },

    md: {
      coulomb:      'PME',
      rcoul:        1.2,
      rvdw:         1.2,
      tcoupl:       'V-rescale',
      pcoupl:       'Parrinello-Rahman',
      constraints:  'h-bonds',
      dispCorr:     'EnerPres',
    },
  },

  // ---------------------------------------------------------------------------
  'BSC0': {
    note: 'PME 1.2 nm, TIP3P, V-rescale, P-R barostat',
    water: 'TIP3P',

    ions: { /* TODO */ integrator:'steep', nsteps:1000, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, pbc:'xyz' },
    em:   { /* TODO */ integrator:'steep', nsteps:50000, emtol:1000.0, emstep:0.01, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, pbc:'xyz', constraints:'none' },
    nvt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, tcoupl:'V-rescale', pcoupl:'no',                  constraints:'h-bonds', dispCorr:'EnerPres' },
    npt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman',    constraints:'h-bonds', dispCorr:'EnerPres' },
    md:   { coulomb:'PME', rcoul:1.2, rvdw:1.2, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman', constraints:'h-bonds', dispCorr:'EnerPres' },
  },

  // ---------------------------------------------------------------------------
  'OL21': {
    note: 'PME 1.2 nm, TIP3P — RNA-optimised',
    water: 'TIP3P',

    ions: { /* TODO */ integrator:'steep', nsteps:1000, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, pbc:'xyz' },
    em:   { /* TODO */ integrator:'steep', nsteps:50000, emtol:1000.0, emstep:0.01, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, pbc:'xyz', constraints:'none' },
    nvt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, tcoupl:'V-rescale', pcoupl:'no',                  constraints:'h-bonds', dispCorr:'EnerPres' },
    npt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman',    constraints:'h-bonds', dispCorr:'EnerPres' },
    md:   { coulomb:'PME', rcoul:1.2, rvdw:1.2, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman', constraints:'h-bonds', dispCorr:'EnerPres' },
  },

  // ---------------------------------------------------------------------------
  'OL15': {
    note: 'PME 1.2 nm, TIP3P — DNA-optimised',
    water: 'TIP3P',

    ions: { /* TODO */ integrator:'steep', nsteps:1000, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, pbc:'xyz' },
    em:   { /* TODO */ integrator:'steep', nsteps:50000, emtol:1000.0, emstep:0.01, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, pbc:'xyz', constraints:'none' },
    nvt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, tcoupl:'V-rescale', pcoupl:'no',                  constraints:'h-bonds', dispCorr:'EnerPres' },
    npt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman',    constraints:'h-bonds', dispCorr:'EnerPres' },
    md:   { coulomb:'PME', rcoul:1.2, rvdw:1.2, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman', constraints:'h-bonds', dispCorr:'EnerPres' },
  },

  // ---------------------------------------------------------------------------
  'CHARMM36m': {
    note: 'PME 1.2 nm, Nose-Hoover, no DispCorr',
    water: 'TIP3P',

    ions: { /* TODO */ integrator:'steep', nsteps:1000, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, pbc:'xyz' },
    em:   { /* TODO */ integrator:'steep', nsteps:50000, emtol:1000.0, emstep:0.01, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, pbc:'xyz', constraints:'none' },
    nvt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, tcoupl:'Nose-Hoover', pcoupl:'no',                constraints:'h-bonds', dispCorr:'no' },
    npt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.2, rvdw:1.2, tcoupl:'Nose-Hoover', pcoupl:'Parrinello-Rahman', constraints:'h-bonds', dispCorr:'no' },
    md:   { coulomb:'PME', rcoul:1.2, rvdw:1.2, tcoupl:'Nose-Hoover', pcoupl:'Parrinello-Rahman', constraints:'h-bonds', dispCorr:'no' },
  },

  // ---------------------------------------------------------------------------
  'AMBER99SB-ILDN': {
    note: 'PME 1.0 nm cutoffs, TIP3P',
    water: 'TIP3P',

    ions: { /* TODO */ integrator:'steep', nsteps:1000, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, pbc:'xyz' },
    em:   { /* TODO */ integrator:'steep', nsteps:50000, emtol:1000.0, emstep:0.01, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, pbc:'xyz', constraints:'none' },
    nvt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, tcoupl:'V-rescale', pcoupl:'no',                  constraints:'h-bonds', dispCorr:'EnerPres' },
    npt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman',    constraints:'h-bonds', dispCorr:'EnerPres' },
    md:   { coulomb:'PME', rcoul:1.0, rvdw:1.0, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman', constraints:'h-bonds', dispCorr:'EnerPres' },
  },

  // ---------------------------------------------------------------------------
  'AMBER14SB': {
    note: 'PME 1.0 nm, TIP3P, EnerPres DispCorr',
    water: 'TIP3P',

    ions: { /* TODO */ integrator:'steep', nsteps:1000, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, pbc:'xyz' },
    em:   { /* TODO */ integrator:'steep', nsteps:50000, emtol:1000.0, emstep:0.01, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, pbc:'xyz', constraints:'none' },
    nvt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, tcoupl:'V-rescale', pcoupl:'no',                  constraints:'h-bonds', dispCorr:'EnerPres' },
    npt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman',    constraints:'h-bonds', dispCorr:'EnerPres' },
    md:   { coulomb:'PME', rcoul:1.0, rvdw:1.0, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman', constraints:'h-bonds', dispCorr:'EnerPres' },
  },

  // ---------------------------------------------------------------------------
  'GROMOS96-54a7': {
    note: 'RF 1.4 nm, SPC water, Berendsen coupling',
    water: 'SPC',

    ions: { /* TODO */ integrator:'steep', nsteps:1000, coulombtype:'Reaction-Field', rcoulomb:1.4, rvdw:1.4, pbc:'xyz' },
    em:   { /* TODO */ integrator:'steep', nsteps:50000, emtol:1000.0, emstep:0.01, coulombtype:'Reaction-Field', rcoulomb:1.4, rvdw:1.4, pbc:'xyz', constraints:'none' },
    nvt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'Reaction-Field', rcoulomb:1.4, rvdw:1.4, tcoupl:'Berendsen', pcoupl:'no',        constraints:'h-bonds', dispCorr:'no' },
    npt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'Reaction-Field', rcoulomb:1.4, rvdw:1.4, tcoupl:'Berendsen', pcoupl:'Berendsen', constraints:'h-bonds', dispCorr:'no' },
    md:   { coulomb:'Reaction-Field', rcoul:1.4, rvdw:1.4, tcoupl:'Berendsen', pcoupl:'Berendsen', constraints:'h-bonds', dispCorr:'no' },
  },

  // ---------------------------------------------------------------------------
  'OPLS-AA': {
    note: 'PME 1.0 nm, TIP4P, EnerPres DispCorr',
    water: 'TIP4P',

    ions: { /* TODO */ integrator:'steep', nsteps:1000, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, pbc:'xyz' },
    em:   { /* TODO */ integrator:'steep', nsteps:50000, emtol:1000.0, emstep:0.01, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, pbc:'xyz', constraints:'none' },
    nvt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, tcoupl:'V-rescale', pcoupl:'no',                  constraints:'h-bonds', dispCorr:'EnerPres' },
    npt:  { /* TODO */ integrator:'md', nsteps:50000, dt:0.002, coulombtype:'PME', rcoulomb:1.0, rvdw:1.0, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman',    constraints:'h-bonds', dispCorr:'EnerPres' },
    md:   { coulomb:'PME', rcoul:1.0, rvdw:1.0, tcoupl:'V-rescale', pcoupl:'Parrinello-Rahman', constraints:'h-bonds', dispCorr:'EnerPres' },
  },

};
