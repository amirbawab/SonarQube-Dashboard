function Metric(group, name, key) {
    Root.call(this);
    this.group = group;
    this.name = name;
    this.key = key;
}

Metric.inherits(Root);