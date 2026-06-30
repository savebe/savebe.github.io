---
layout: page
title: Upper-Limb Rehabilitation Exoskeleton
description: Development and FEA optimization of a compact rehabilitation device
img: assets/img/Projects/exoskeleton/fiished.jpeg
importance: 2
---

This project focused on the development of a compact upper-limb rehabilitation exoskeleton. The goal was to create a low-cost device that supports arm movement after a stroke or injury and reduces the effort needed by the user during rehabilitation exercises.

The system had to support the user while lifting a 1 kg load and reduce the required effort by 50%. At the same time, the design had to stay lightweight, easy to assemble, and small enough to fit into a 200 × 100 × 100 mm storage box.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/sketch.png" title="Concept sketch of the exoskeleton" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/freebody.png" title="System free-body diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Concept sketch and free-body diagram from the project report.
</div>

The exoskeleton was designed around the elbow joint. The main mechanical idea was to place the drive close to the joint axis, so the system could support the arm movement in a compact way. For this, a capstan-drive mechanism was used. The drive used a two-stage timing belt reduction with a total ratio of 14.3:1, increasing the motor torque while keeping the system small.

Several parts of the exoskeleton were designed as sliding rail components. This allowed the system to be adjusted for different arm lengths and also made it possible to disassemble the device for storage.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/capstan.png" title="Capstan drive mechanism" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The capstan drive and Part 4.2 were key parts of the elbow joint mechanism.
</div>

My main focus was the structural optimization of one capstan-drive component using Ansys. Part 4.2 connects the drive mechanism to the forearm structure and is held by bearings. Because it transfers load through the timing belt and the mechanical connection to the rest of the exoskeleton, it had to be strong enough while still remaining lightweight and printable.

The component was analyzed with finite element simulations. Forces, moments, bearing supports, and contact areas were defined in Ansys, and the resulting stress distribution was used to improve the geometry. The design was then changed through several iterations, removing material in low-stress areas and reinforcing critical regions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/before.png" title="Part 4.2 before optimization" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/after.png" title="Part 4.2 after optimization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Ansys simulations were used to compare the original and optimized geometry.
</div>

The optimization process helped identify weak points and areas with unnecessary material. Based on the simulation results, the design was improved with a more efficient structure while keeping the important interfaces, bearing seats, and timing belt geometry functional.

The project combined mechanical design, drive concept development, force calculations, finite element analysis, and design for additive manufacturing. It showed how simulation can be used to improve a functional prototype before production and how engineering decisions often require balancing strength, weight, compactness, and printability.
